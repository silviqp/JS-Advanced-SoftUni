function square (n){
    const star = '* ';

        for (let i = 0; i < n; i++) {
            console.log(`${(star.repeat(n)).trim()}`);
        }
    }

square(7)