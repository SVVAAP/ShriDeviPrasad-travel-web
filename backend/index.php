<?php
require 'vendor/autoload.php';
use Dotenv\Dotenv;
use PDO;
use PDOException;

header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

$dotenv = Dotenv::createImmutable(__DIR__);
$dotenv->load();

$dsn = "mysql:host=" . $_ENV['DB_HOST'] . ";dbname=" . $_ENV['DB_NAME'] . ";port=" . $_ENV['DB_PORT'];
$options = [
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
];

try {
    $pdo = new PDO($dsn, $_ENV['DB_USER'], $_ENV['DB_PASSWORD'], $options);
} catch (PDOException $e) {
    die(json_encode(["error" => "Database connection failed"]));
}

$requestMethod = $_SERVER["REQUEST_METHOD"];
$endpoint = explode("/", trim($_SERVER["REQUEST_URI"], "/"))[0];
$data = json_decode(file_get_contents("php://input"), true);

function respond($data) {
    echo json_encode($data);
    exit;
}

if ($endpoint === "vehicles" && $requestMethod === "POST") {
    $stmt = $pdo->prepare("INSERT INTO vehicles (title, description, imagesrc) VALUES (?, ?, ?)");
    $stmt->execute([$data['title'], $data['description'], $data['imagesrc']]);
    respond(["id" => $pdo->lastInsertId()] + $data);
}

if ($endpoint === "vehicles" && $requestMethod === "GET") {
    $stmt = $pdo->query("SELECT * FROM vehicles");
    respond($stmt->fetchAll());
}

if ($endpoint === "services" && $requestMethod === "POST") {
    $stmt = $pdo->prepare("INSERT INTO services (icon, title, description) VALUES (?, ?, ?)");
    $stmt->execute([$data['icon'], $data['title'], $data['description']]);
    respond(["id" => $pdo->lastInsertId()] + $data);
}

if ($endpoint === "services" && $requestMethod === "GET") {
    $stmt = $pdo->query("SELECT * FROM services");
    respond($stmt->fetchAll());
}

if ($endpoint === "package" && $requestMethod === "POST") {
    $stmt = $pdo->prepare("INSERT INTO package (title, description, image) VALUES (?, ?, ?)");
    $stmt->execute([$data['title'], $data['description'], $data['image']]);
    respond(["id" => $pdo->lastInsertId()] + $data);
}

if ($endpoint === "package" && $requestMethod === "GET") {
    $stmt = $pdo->query("SELECT * FROM package");
    respond($stmt->fetchAll());
}

if ($endpoint === "booking" && $requestMethod === "POST") {
    $stmt = $pdo->prepare("INSERT INTO booking (name, email, phone, date, booking_date, booking_time, package_id, vehicle_id, no_passengers) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)");
    $stmt->execute([$data['name'], $data['email'], $data['phone'], $data['date'], $data['booking_date'], $data['booking_time'], $data['package_id'], $data['vehicle_id'], $data['no_passengers']]);
    respond(["id" => $pdo->lastInsertId()] + $data);
}

if ($endpoint === "booking" && $requestMethod === "GET") {
    $stmt = $pdo->query("SELECT * FROM booking");
    respond($stmt->fetchAll());
}

respond(["error" => "Invalid request"]);