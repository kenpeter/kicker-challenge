<?php

namespace App\Http\Controllers;

use App\Job;
use App\Http\Controllers\Controller;
use http\Env\Response;
use Illuminate\Http\Request;

class JobController extends Controller
{
  /**
   * Create a new controller instance.
   *
   * @return void
   */
  public function __construct()
  {
    //
  }

  public function createJob(Request $request) {
    $job = Job::create($request->all());
    return response()->json($job);
  }

  public function deleteJob(Request $request, $id) {
    $job = Job::find($id);
    if($job !== null) {
      $job->delete();
      return response()->json('deleted successfully');
    } else {
      return response()->json('no such job');
    }
  }

  public function index() {
    $jobs = Job::all();
    return response()->json($jobs);
  }

}
