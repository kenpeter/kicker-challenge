<?php

use Laravel\Lumen\Testing\DatabaseMigrations;
use Laravel\Lumen\Testing\DatabaseTransactions;

class ApiJobTest extends TestCase
{
  public function testApiJobNumber() {
    $this->get('/api/jobs');

    $data = $this->response->getContent();
    $arr = json_decode($data);

    // we have more than 1 job
    $this->assertGreaterThan(
      0, count($arr)
    );
  }

  public function testApiJobPost() {
    $data = [
      'title' => 'web developer',
      'description' => 'awesome developer',
      'location' => 'Victoria'
    ];

    $content = $this->json('POST', '/api/job', $data)->response->getContent();
    $obj = json_decode($content);

    $this->assertEquals(
      'web developer', $obj->title
    );
  }

  public function testApiJobDelete() {
    $this->get('/api/job/delete/9999999999');

    $data = $this->response->getContent();
    $this->assertEquals(
      '"no such job"', $data
    );
  }


}
