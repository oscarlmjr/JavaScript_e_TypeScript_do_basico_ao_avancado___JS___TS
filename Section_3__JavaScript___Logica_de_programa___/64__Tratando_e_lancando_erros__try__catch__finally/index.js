try {
    console.log('Abri um arquivo'); // Executa quando  não há erros
    console.log('Manipulei o arquivo e gerou erro');
    console.log('Fechei o  arquivo');

    try {
        console.log(b);
    } catch(e) {
        console.log('Deu erro');
    } finally {
        console.log('Também sou finally');
    }

} catch (e) {
    console.log('Tratando o erro'); // Excuta quando há erros
} finally {
    console.log('FINALLY: eu sempre sou executado'); // Sempre
}