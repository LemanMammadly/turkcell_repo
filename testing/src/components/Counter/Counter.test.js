import {render,screen} from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import Counter from './Index'


describe('Counter Tests',()=>{
    let increaseBtn,decreaseBtn,count;

    beforeEach(()=>{
        console.log("Every time working before");
        render(<Counter/>)
        increaseBtn=screen.getByText('Increase')
        decreaseBtn=screen.getByText('Decrease')
        count=screen.getByText('0')
    })

    beforeAll(()=>{
        console.log("One time working start");
    })

    afterEach(()=>{
        console.log("Every time working after");
    })

    afterAll(()=>{
        console.log("One time working end");
    })

    test('increase btn',()=>{
        userEvent.click(increaseBtn);
        expect(count).toHaveTextContent('1');
    });
    
    test('decrease btn',()=>{    
        userEvent.click(decreaseBtn);
        expect(count).toHaveTextContent('1');
    });
});


