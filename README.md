<div>
    <h1>Quote Microservice</h1>
</div>

## About The Project

The Quote of the Day microservice is a simple, lightweight API designed to provide a random motivational quote. It fetches quotes from an external API and can be easily integrated into your applications to offer daily inspiration to users. The service is built with Node.js and utilizes JSON-RPC over HTTP for efficient communication.

## Table of Contents

<ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#overview">Overview</a></li>
        <li><a href="#features">Features</a></li>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#configuration">Configuration</a></li>
        <li><a href="#running-the-service">Running the service</a></li>
      </ul>
    </li>
    <li>
      <a href="#contributing">Contributing</a>
    </li>
 </ol>

## Overview

The Quote of the Day microservice is built with a focus on simplicity and ease of use. It provides a random quote each time it is called, making it ideal for applications that require motivational content.

## Features

<div>
  <ul>
      <li> <b>Random Quote Retrieval:</b> Fetches a random motivational quote.</li>
      <li> <b>JSON-RPC Support:</b> Utilizes JSON-RPC for efficient, lightweight API communication.</li>
      <li> <b>Cloud Ready:</b> Easily deployable to any cloud provider.</li>
  </ul>
</div>


## Built With

[![Node.js][nodejs.com]][nodejs-url]
[![Docker][docker.com]][docker-url]

<!-- GETTING STARTED -->
## Getting Started

## Prerequisites

Before you begin, make sure you have the following tools installed on your machine:

- **Node.js 20 or higher** - [Download Node](https://nodejs.org/en/download/package-manager)

If you don't have any of these tools installed, follow the provided links to install them.


## Installation

1.- Clone the repository
   ```sh
   git clone https://github.com/Retrofiyer/Quote-Service.git
   cd Quote-Service
   ```
2.- Build project using node.js
 ```sh
   npm install
   ```

## Configuration

First create a file with the name `.env` in the root project.

Using Windows:

```sh
    echo > .env
   ```

Using Linux:

```sh
    touch .env
   ```

The configuration for the Exchange Service is located in `.env`. Below is an example configuration:

 ```sh
    SERVER_URL==Your-Server-URL(if deploy in cloud provider)
   ```

## Running the service

  ```sh
    npm start
   ```

## Contributing

I would like you to contribute to this project. Whether it's fixing a bug, adding a new feature or improving the documentation, your help is always welcome. Please email me at `sebitas5225@gmail.com` with all the details for improvement.

<!-- LINKS & IMAGES -->

[docker.com]: https://img.shields.io/badge/Docker-black?style=for-the-badge&logo=docker&logoColor=white
[docker-url]: https://www.docker.com/
[nodejs.com]: https://img.shields.io/badge/Node.js-black?style=for-the-badge&logo=node.js&logoColor=white
[nodejs-url]: https://nodejs.org/
[swagger.com]: https://img.shields.io/badge/Swagger-black?style=for-the-badge&logo=swagger&logoColor=white
[swagger-url]: https://swagger.io/
