import {render,screen} from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import Todo from './Index'


describe('Todo Tests',()=>{
    let button,input;

    beforeEach(()=>{
        render(<Todo/>)

        button=screen.getByText('Add')
        input=screen.getByLabelText('Text')
    });

    test('3 element must be rendered',()=>{
        const items=screen.getAllByText(/Item/i)

        expect(items.length).toEqual(3);
    });

    test('input and button must be find',()=>{
        expect(button).toBeInTheDocument();
        expect(input).toBeInTheDocument();
    })

    test("Input adding list",()=>{
        const name="Nicat";
        userEvent.type(input,name)

        userEvent.click(button)

        expect(screen.getByText(name)).toBeInTheDocument();
    })
})