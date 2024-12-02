// Draw a star
function drawStar(x, y, size) {
    fill(255, 255, 0); // Yellow
    ellipse(x, y, size, size); // Star body
}

// Draw a mountain
function drawMountain(baseX, baseY, width, height) {
    fill(100, 100, 100); // Gray
    triangle(baseX, baseY, baseX - width / 2, baseY + height, baseX + width / 2, baseY + height);
}

// Draw a tree
function drawTree(x, y, trunkWidth, trunkHeight, foliageSize) {
    fill(139, 69, 19); // Brown trunk
    rect(x, y, trunkWidth, trunkHeight); // Trunk
    fill(34, 139, 34); // Green foliage
    triangle(
        x - foliageSize / 2, y, 
        x + trunkWidth + foliageSize / 2, y, 
        x + trunkWidth / 2, y - foliageSize
    );
}

// Example usage in setup()
function setup() {
    createCanvas(800, 400);
    background(0, 0, 50); // Starry night sky

    // Draw stars
    drawStar(100, 50, 5);
    drawStar(200, 75, 5);
    drawStar(300, 40, 5);
    drawStar(400, 90, 5);

    // Draw mountains
    drawMountain(200, 300, 150, 200);
    drawMountain(400, 300, 200, 250);
    drawMountain(600, 300, 180, 220);
    drawMountain(800, 300, 160, 210);

    // Draw trees with size variations
    drawTree(150, 350, 10, 50, 30);
    drawTree(250, 350, 10, 60, 35);
    drawTree(350, 350, 10, 55, 32);
    drawTree(450, 350, 10, 50, 28);
}
