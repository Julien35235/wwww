document.addEventListener('DOMContentLoaded', function () {
    // Sélection de toutes les cartes
    const cards = document.querySelectorAll('.card');

    // Attribution des gestionnaires d'événements pour le glisser-déposer à chaque carte
    cards.forEach(card => {
        card.addEventListener('dragstart', dragStart);
        card.addEventListener('dragend', dragEnd);
    });

    // Sélection de toutes les colonnes
    const columns = document.querySelectorAll('.column');

    // Attribution des gestionnaires d'événements pour le glisser-déposer à chaque colonne
    columns.forEach(column => {
        column.addEventListener('dragover', dragOver);
        column.addEventListener('dragenter', dragEnter);
        column.addEventListener('dragleave', dragLeave);
        column.addEventListener('drop', drop);
    });

    // Fonction appelée lorsqu'un glisser-déposer commence
    function dragStart() {
        this.classList.add('dragging');
    }

    // Fonction appelée lorsque le glisser-déposer se termine
    function dragEnd() {
        this.classList.remove('dragging');
    }

    // Fonction appelée lorsqu'un élément est survolé pendant le glisser-déposer
    function dragOver(e) {
        e.preventDefault();
    }

    // Fonction appelée lorsqu'un élément est survolé pendant le glisser-déposer
    function dragEnter() {
        this.classList.add('dragover');
    }

    // Fonction appelée lorsqu'un élément n'est plus survolé pendant le glisser-déposer
    function dragLeave() {
        this.classList.remove('dragover');
    }

    // Fonction appelée lorsqu'un élément est relâché pour terminer le glisser-déposer
    function drop() {
        const draggedCard = document.querySelector('.dragging');
        const sourceColumn = draggedCard.parentElement;
        const targetColumn = this;

        // Déplacement de la carte vers la colonne cible, si elle est différente de la colonne source
        if (sourceColumn !== targetColumn) {
            targetColumn.appendChild(draggedCard);
            sourceColumn.classList.remove('dragover');
        }

        this.classList.remove('dragover');
    }
});