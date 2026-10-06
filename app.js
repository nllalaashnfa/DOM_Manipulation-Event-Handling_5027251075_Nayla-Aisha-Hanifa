let tugas = [];

const listTugas = document.getElementById('list-tugas');
const form = document.getElementById('form-tugas');
const inputJudul = document.getElementById('input-judul');
const inputMatkul = document.getElementById('input-matkul');
const inputDeadline = document.getElementById('input-deadline');
const pesanError = document.getElementById('pesan-error');

function render() {
    listTugas.innerHTML = ''; 

tugas.forEach(item => {
const li = document.createElement('li');
        li.dataset.id = item.id;
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'cek-selesai';
        checkbox.checked = item.selesai;
        const divTeks = document.createElement('div');
        divTeks.className = 'teks';
        const judul = document.createElement('strong');
        judul.textContent = item.judul;
        const meta = document.createElement('small');
        meta.textContent = `${item.matkul} - deadline ${item.deadline}`; 
        divTeks.appendChild(judul);
        divTeks.appendChild(meta);
        const btnHapus = document.createElement('button');
        btnHapus.className = 'btn-hapus';
        btnHapus.textContent = '✕';
        li.appendChild(checkbox);
        li.appendChild(divTeks);
        li.appendChild(btnHapus);
        listTugas.appendChild(li);
    });
}

render(); 

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const judul = inputJudul.value.trim();
    const matkul = inputMatkul.value;
    const deadline = inputDeadline.value;

    if (judul.length < 3) {
        pesanError.textContent = "Judul tugas minimal 3 karakter.";
        pesanError.classList.remove('sembunyi');
        return;
    }
    if (!deadline) {
        pesanError.textContent = "Deadline wajib diisi.";
        pesanError.classList.remove('sembunyi');
        return;
    }
    
    pesanError.classList.add('sembunyi');

    tugas.push({
        id: Date.now().toString(),
        judul,
        matkul,
        deadline,
        selesai: false
    });

    render();
    form.reset();
});