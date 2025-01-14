function saskaitisana(sk1,sk2){
    // darbība ko funkcijas izpilda
    return sk1+sk2;
}

// saskaitisana(123123,23423432);

function izvade(rezultats){
    document.write(`
        <div style="border:2px solid red;padding:10px;font-size:25pt">
            Rezultāts ir: ${rezultats}!
        </div>    
        `);
}

izvade(saskaitisana(123123,234234));