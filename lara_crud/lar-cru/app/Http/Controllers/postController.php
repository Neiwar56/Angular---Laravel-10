<?php

namespace App\Http\Controllers;

use App\Models\post;
use Illuminate\Http\Request;
use App\Http\Requests\PostRequest;


class postController extends Controller{

    public function index(){
        return post::all();
    }

    public function store(Request $request){
        $post = post::create($request->all( ));
        return ($post);
        }

    public function show($id){
        return post::findOrFail($id);
    }

    public function update(Request $request, $id){
        $post = post::findOrFail($id);
        $post->update($request->all());
        return $post;
    }

    public function destroy($id){
        $post = post::findOrFail($id);
        $post->delete();
        return response()->json(null, 201);
    }
}
