<?php

namespace App\Http\Controllers;
use App\Models\Account;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Contracts\Validation\Validator;

class AccountController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $account = Account::all();
        return response()->json($account);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'username' => 'required|unique:accounts',
            'password' => 'required',
            'role' => 'in:user,admin', // Example validation for role
        ]);

        // Hash password before saving to database
        $validatedData['password'] = bcrypt($validatedData['password']);

        $account = Account::create($validatedData);

        return response()->json($account, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $account = Account::findOrFail($id);

        return response()->json($account);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $account = Account::findOrFail($id);

        $validatedData = $request->validate([
            'username' => 'required|unique:accounts,username,'.$id,
            'password' => 'required',
            'role' => 'in:user,admin',
        ]);

        // Hash password before updating
        $validatedData['password'] = bcrypt($validatedData['password']);

        $account->update($validatedData);

        return response()->json($account, 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $account = Account::findOrFail($id);
        $account->delete();

        return response()->json(null, 204);
    }

    public function register(Request $request)
    {
        $validator = Validator($request->all(), [
            'username' => 'required|string|max:255',
            'password' => 'required|string|min:8|confirmed',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        $account = Account::create([
            'username' => $request->username,
            'password' => $request->password,
        ]);

        $token = $account->createToken('auth_token')->plainTextToken;

        return response()->json([
            'access_token' => $token,
            'token_type' => 'Bearer',
        ]);
    }

    public function login(Request $request)
    {
        // Kiểm tra thông tin đăng nhập
        if (!Auth::attempt($request->only('username', 'password'))) {
            return response()->json(['message' => 'Invalid login details'], 401);
        }

        // Lấy thông tin người dùng sau khi xác thực thành công
        $account = Account::where('username', $request['username'])->firstOrFail();

        // Tạo token cho phiên đăng nhập
        $token = $account->createToken('auth_token')->plainTextToken;

        // Trả về token và kiểu token
        return response()->json([
            'access_token' => $token,
            'token_type' => 'Bearer',
        ]);
    }
}
