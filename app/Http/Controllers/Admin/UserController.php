<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class UserController extends Controller
{
    // ユーザー一覧の表示
    public function index()
    {
        echo "<h1>ここに処理を追加します</h1>";
    }

    // ユーザー登録ページ表示用
    public function torokuPage()
    {
        // 処理を追加
    }

    // ユーザー登録の実行
    public function toroku(Request $request)
    {
        // 処理を追加
    }

    // ユーザー編集ページ
    public function henshuPage($id)
    {
        // 処理を追加
    }

    // ユーザー編集の実行
    public function henshu($id, Request $request)
    {
        // 処理を追加
    }

    // ユーザー削除の実行
    public function sakujo($id)
    {
        // 処理を追加
    }
}