const cadastros = [
    {
        nome: "adim",
        email: "user@example.com.br"
    }
]
let mensagem = document.getElementById("mensagem")

function cadastro() {
    const email = document.getElementById("email").value
    const nome = document.getElementById("nome").value

    const existeCadastro = cadastros.some(cadastro => cadastro.email === email)

    if (existeCadastro) {
        document.getElementById("email").style.backgroundColor = "#FFEBEB"

        document.getElementById("email").style.borderColor = "#FF8C89"

        document.getElementById("AsteriscoEmail").innerHTML = `<p>*</p>`

        mensagem.innerHTML = `<span><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
  <path d="M1.87769 2.49725C1.83702 2.45658 1.80475 2.40829 1.78273 2.35514C1.76072 2.30199 1.74939 2.24503 1.74939 2.1875C1.74939 2.12998 1.76072 2.07301 1.78273 2.01987C1.80475 1.96672 1.83702 1.91843 1.87769 1.87775C1.91837 1.83708 1.96666 1.80481 2.01981 1.7828C2.07295 1.76078 2.12992 1.74945 2.18744 1.74945C2.24497 1.74945 2.30193 1.76078 2.35508 1.7828C2.40822 1.80481 2.45652 1.83708 2.49719 1.87775L6.99994 6.38138L11.5027 1.87775C11.5434 1.83708 11.5917 1.80481 11.6448 1.7828C11.698 1.76078 11.7549 1.74945 11.8124 1.74945C11.87 1.74945 11.9269 1.76078 11.9801 1.7828C12.0332 1.80481 12.0815 1.83708 12.1222 1.87775C12.1629 1.91843 12.1951 1.96672 12.2171 2.01987C12.2392 2.07301 12.2505 2.12998 12.2505 2.1875C12.2505 2.24503 12.2392 2.30199 12.2171 2.35514C12.1951 2.40829 12.1629 2.45658 12.1222 2.49725L7.61857 7L12.1222 11.5028C12.1629 11.5434 12.1951 11.5917 12.2171 11.6449C12.2392 11.698 12.2505 11.755 12.2505 11.8125C12.2505 11.87 12.2392 11.927 12.2171 11.9801C12.1951 12.0333 12.1629 12.0816 12.1222 12.1223C12.0815 12.1629 12.0332 12.1952 11.9801 12.2172C11.9269 12.2392 11.87 12.2506 11.8124 12.2506C11.7549 12.2506 11.698 12.2392 11.6448 12.2172C11.5917 12.1952 11.5434 12.1629 11.5027 12.1223L6.99994 7.61863L2.49719 12.1223C2.45652 12.1629 2.40822 12.1952 2.35508 12.2172C2.30193 12.2392 2.24497 12.2506 2.18744 12.2506C2.12992 12.2506 2.07295 12.2392 2.01981 12.2172C1.96666 12.1952 1.91837 12.1629 1.87769 12.1223C1.83702 12.0816 1.80475 12.0333 1.78273 11.9801C1.76072 11.927 1.74939 11.87 1.74939 11.8125C1.74939 11.755 1.76072 11.698 1.78273 11.6449C1.80475 11.5917 1.83702 11.5434 1.87769 11.5028L6.38132 7L1.87769 2.49725Z" fill="#FF3934"/>
</svg></span><p> E-mail já cadastrado!</p>`

    } else if (nome === "" || email === "") {
        document.getElementById("email").style.backgroundColor = "#FFEBEB"
        document.getElementById("email").style.borderColor = "#FF8C89"

        document.getElementById("nome").style.backgroundColor = "#FFEBEB"
        document.getElementById("nome").style.borderColor = "#FF8C89"

        document.getElementById("AsteriscoEmail").innerHTML = `<p>*</p>`

        document.getElementById("AsteriscoNome").innerHTML = `<p>*</p>`

        mensagem.innerHTML = `<span><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
  <path d="M1.87769 2.49725C1.83702 2.45658 1.80475 2.40829 1.78273 2.35514C1.76072 2.30199 1.74939 2.24503 1.74939 2.1875C1.74939 2.12998 1.76072 2.07301 1.78273 2.01987C1.80475 1.96672 1.83702 1.91843 1.87769 1.87775C1.91837 1.83708 1.96666 1.80481 2.01981 1.7828C2.07295 1.76078 2.12992 1.74945 2.18744 1.74945C2.24497 1.74945 2.30193 1.76078 2.35508 1.7828C2.40822 1.80481 2.45652 1.83708 2.49719 1.87775L6.99994 6.38138L11.5027 1.87775C11.5434 1.83708 11.5917 1.80481 11.6448 1.7828C11.698 1.76078 11.7549 1.74945 11.8124 1.74945C11.87 1.74945 11.9269 1.76078 11.9801 1.7828C12.0332 1.80481 12.0815 1.83708 12.1222 1.87775C12.1629 1.91843 12.1951 1.96672 12.2171 2.01987C12.2392 2.07301 12.2505 2.12998 12.2505 2.1875C12.2505 2.24503 12.2392 2.30199 12.2171 2.35514C12.1951 2.40829 12.1629 2.45658 12.1222 2.49725L7.61857 7L12.1222 11.5028C12.1629 11.5434 12.1951 11.5917 12.2171 11.6449C12.2392 11.698 12.2505 11.755 12.2505 11.8125C12.2505 11.87 12.2392 11.927 12.2171 11.9801C12.1951 12.0333 12.1629 12.0816 12.1222 12.1223C12.0815 12.1629 12.0332 12.1952 11.9801 12.2172C11.9269 12.2392 11.87 12.2506 11.8124 12.2506C11.7549 12.2506 11.698 12.2392 11.6448 12.2172C11.5917 12.1952 11.5434 12.1629 11.5027 12.1223L6.99994 7.61863L2.49719 12.1223C2.45652 12.1629 2.40822 12.1952 2.35508 12.2172C2.30193 12.2392 2.24497 12.2506 2.18744 12.2506C2.12992 12.2506 2.07295 12.2392 2.01981 12.2172C1.96666 12.1952 1.91837 12.1629 1.87769 12.1223C1.83702 12.0816 1.80475 12.0333 1.78273 11.9801C1.76072 11.927 1.74939 11.87 1.74939 11.8125C1.74939 11.755 1.76072 11.698 1.78273 11.6449C1.80475 11.5917 1.83702 11.5434 1.87769 11.5028L6.38132 7L1.87769 2.49725Z" fill="#FF3934"/>
</svg></span><p> Insira os campos de email e nome!</p>`

    }
    else {
        cadastros.push({ nome, email })
        window.location.href = "/html/InovaGastro2023.html"
    }
}

