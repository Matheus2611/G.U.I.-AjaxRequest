<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use GuzzleHttp\Exception\GuzzleException;
use GuzzleHttp\Client;

class GUIController extends Controller
{

public function getRemoteData()
    {

    $client = new Client();

    $request = $client->get('http://localhost:777/api/show');
    $response = $request->getBody();
    $response = json_decode($response);

   return $response;


    }


}
