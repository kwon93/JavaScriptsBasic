const x = 'x';

function c(){
    const y = 'y';
    console.log('c');
    debugger
}

function a(){
    console.log('a');
    function b(){
        console.log('b');
        c();
    }
    b();
}

a();
c();

//a->b->c->c 호출