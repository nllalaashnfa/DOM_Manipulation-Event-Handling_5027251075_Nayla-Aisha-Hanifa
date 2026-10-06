let tugas = [];

const listTugas = document.getElementById('list-tugas');

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