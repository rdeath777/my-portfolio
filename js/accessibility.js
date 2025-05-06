document.addEventListener('DOMContentLoaded', () => {
    // Inject Accessibility Widget HTML
    const widgetHTML = `
        <div class="accessibility-widget">
            <button id="accessibility-toggle" aria-label="Toggle Accessibility Tools">
                <i class="fas fa-universal-access"></i>
            </button>
            <div id="accessibility-menu" class="accessibility-menu">
                <button onclick="increaseText()" aria-label="Increase Text Size"><i class="fas fa-search-plus"></i> Increase Text</button>
                <button onclick="decreaseText()" aria-label="Decrease Text Size"><i class="fas fa-search-minus"></i> Decrease Text</button>
                <button onclick="toggleGrayscale()" aria-label="Toggle Grayscale"><i class="fas fa-adjust"></i> Grayscale</button>
                <button onclick="toggleHighContrast()" aria-label="Toggle High Contrast"><i class="fas fa-sun"></i> High Contrast</button>
                <button onclick="toggleNegativeContrast()" aria-label="Toggle Negative Contrast"><i class="fas fa-moon"></i> Negative Contrast</button>
                <button onclick="toggleLightBackground()" aria-label="Toggle Light Background"><i class="fas fa-lightbulb"></i> Light Background</button>
                <button onclick="toggleLinksUnderline()" aria-label="Toggle Links Underline"><i class="fas fa-link"></i> Links Underline</button>
                <button onclick="toggleReadableFont()" aria-label="Toggle Readable Font"><i class="fas fa-font"></i> Readable Font</button>
                <button onclick="resetAccessibility()" aria-label="Reset Accessibility Settings"><i class="fas fa-undo"></i> Reset</button>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('afterbegin', widgetHTML);

    // Accessibility Widget Toggle
    const accessibilityToggle = document.getElementById('accessibility-toggle');
    const accessibilityMenu = document.getElementById('accessibility-menu');

    accessibilityToggle.addEventListener('click', () => {
        accessibilityMenu.style.display = accessibilityMenu.style.display === 'block' ? 'none' : 'block';
    });

    // Accessibility Functions
    window.textSizeLevel = 0;
    window.maxTextSizeLevel = 2;
    window.minTextSizeLevel = -2;

    window.increaseText = function() {
        if (textSizeLevel < maxTextSizeLevel) {
            textSizeLevel++;
            document.documentElement.style.fontSize = `${16 + textSizeLevel * 2}px`;
        }
    };

    window.decreaseText = function() {
        if (textSizeLevel > minTextSizeLevel) {
            textSizeLevel--;
            document.documentElement.style.fontSize = `${16 + textSizeLevel * 2}px`;
        }
    };

    window.toggleGrayscale = function() {
        document.body.classList.toggle('grayscale');
    };

    window.toggleHighContrast = function() {
        document.body.classList.toggle('high-contrast');
    };

    window.toggleNegativeContrast = function() {
        document.body.classList.toggle('negative-contrast');
    };

    window.toggleLightBackground = function() {
        document.body.classList.toggle('light-background');
    };

    window.toggleLinksUnderline = function() {
        document.body.classList.toggle('links-underline');
    };

    window.toggleReadableFont = function() {
        document.body.classList.toggle('readable-font');
    };

    window.resetAccessibility = function() {
        textSizeLevel = 0;
        document.documentElement.style.fontSize = '16px';
        document.body.classList.remove('grayscale', 'high-contrast', 'negative-contrast', 'light-background', 'links-underline', 'readable-font');
    };
});