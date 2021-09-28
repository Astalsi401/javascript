function mkques() {
    let q = '';
    for (let i = 0; i < 51; i++) {
        q += '<label>' + i + '：' + '</label>';
        q += '<label><input value="A" type="radio" name="no' + i + '">A</label>';
        q += '<label><input value="B" type="radio" name="no' + i + '">B</label>';
        q += '<label><input value="C" type="radio" name="no' + i + '">C</label>';
        q += '<label><input value="D" type="radio" name="no' + i + '">D</label>';
    };
    console.log(q);
}

mkques();