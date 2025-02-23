<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

require 'db.php';

// Extract endpoint correctly from URL
$endpoint = isset($_GET['endpoint']) ? $_GET['endpoint'] : null;
$requestMethod = $_SERVER["REQUEST_METHOD"];
$data = json_decode(file_get_contents("php://input"), true);

// Debugging: Check if endpoint is detected
if (!$endpoint) {
    echo json_encode(["error" => "No endpoint found"]);
    exit;
}

// Function to send JSON response
function respond($data, $statusCode = 200) {
    http_response_code($statusCode);
    echo json_encode($data);
    exit;
}

try {
    // Handle CORS Preflight (OPTIONS request)
    if ($requestMethod === "OPTIONS") {
        respond(["message" => "CORS Preflight OK"]);
    }

    // Create a new vehicle (POST /api/vehicles)
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

    // Default response for invalid endpoints
    respond(["error" => "Invalid request"], 404);
} catch (Exception $e) {
    respond(["error" => "Server error", "details" => $e->getMessage()], 500);
}
?>