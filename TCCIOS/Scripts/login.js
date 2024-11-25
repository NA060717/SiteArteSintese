
function redirectToCourse(course) {
    let url = `cadastro.html?course=${course}`;
    window.location.href = url;
}


window.onload = function () {
    let params = new URLSearchParams(window.location.search);
    let course = params.get('course');
    let courseTitle = document.getElementById('course-title');
    if (course) {
        switch (course) {
            case 'fotografia':
                courseTitle.textContent = 'Cadastro - Fotografia';
                break;
            case 'cinema':
                courseTitle.textContent = 'Cadastro - Cinema Audiovisual';
                break;
            case 'design':
                courseTitle.textContent = 'Cadastro - Design Gráfico';
                break;
            default:
                courseTitle.textContent = 'Cadastro';
        }
    }
};



