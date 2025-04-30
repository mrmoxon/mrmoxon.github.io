document.addEventListener('DOMContentLoaded', function() {
    // Function to remove numerical prefixes
    function removeNumericalPrefixes(element) {
        if (!element || !element.textContent) return;

        let text = element.textContent;
        
        // Remove "Part X:" pattern (with regular numbers)
        text = text.replace(/^Part\s+\d+:\s*/i, '');
        
        // Remove "Part" with Roman numerals (I, II, III, IV, V, etc.)
        text = text.replace(/^Part\s+[IVXLCDM]+:\s*/i, '');
        
        // Remove decimal numbers (1.1., 1.2., etc.)
        text = text.replace(/^\d+\.\d+\.\s*/g, '');
        
        // Remove simple numbers with dot (1., 2., etc.)
        text = text.replace(/^\d+\.\s*/g, '');
        
        // Remove version-like numbers (1.0., 2.0., etc.)
        text = text.replace(/^\d+\.\d+\.\s*/g, '');
        
        // Remove standalone Roman numerals
        text = text.replace(/^[IVXLCDM]+\.\s*/g, '');
        
        // Update the text if it changed
        if (text !== element.textContent) {
            element.textContent = text;
        }
    }

    // Process all headings
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    headings.forEach(removeNumericalPrefixes);

    // Process elements with remove-numbers class
    const elements = document.querySelectorAll('.remove-numbers');
    elements.forEach(removeNumericalPrefixes);
}); 