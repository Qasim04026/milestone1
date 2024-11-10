// This TypeScript file is included to provide structure for potential future functionalities.
// Currently, there is no dynamic functionality required for the static resume.

document.addEventListener('DOMContentLoaded', () => {
    console.log('Static Resume Page Loaded');
    // You can add any JavaScript or TypeScript functionality here if needed in the future.
    
    // Example: Adding an event listener to the CV link
    const cvLink = document.querySelector('a[href*="path_to_your_cv.pdf"]');
    if (cvLink) {
        cvLink.addEventListener('click', (event) => {
            console.log('CV link clicked');
        });
    }
});

// You can also add other functions or event listeners here.
