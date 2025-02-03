// Function to calculate final price after discount and tax
function calculateFinalPrice(productName, originalPrice, discountPercentage, taxPercentage) {
    // Step 1: Calculate the discount amount
    const discountAmount = originalPrice * (discountPercentage / 100);
    
    // Step 2: Calculate the price after discount
    const priceAfterDiscount = originalPrice - discountAmount;

    // Step 3: Calculate the tax amount on the discounted price
    const taxAmount = priceAfterDiscount * (taxPercentage / 100);
    
    // Final price after adding tax
    const finalPrice = priceAfterDiscount + taxAmount;

    // Display the results
    console.log(`Product Name: ${productName}`);
    console.log(`Original Price: $${originalPrice.toFixed(2)}`);
    console.log(`Discount Percentage: ${discountPercentage}%`);
    console.log(`Discount Amount: $${discountAmount.toFixed(2)}`);
    console.log(`Price After Discount: $${priceAfterDiscount.toFixed(2)}`);
    console.log(`Tax Percentage: ${taxPercentage}%`);
    console.log(`Tax Amount: $${taxAmount.toFixed(2)}`);
    console.log(`Final Price: $${finalPrice.toFixed(2)}`);
}

// Example Usage
calculateFinalPrice('Laptop', 1200, 10, 8);