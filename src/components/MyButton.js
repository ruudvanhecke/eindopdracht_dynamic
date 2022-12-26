import {Button} from "react-bootstrap";

export function MyButton(props){
    const {onClick, children, variant} = props;

    return <Button variant={variant} size="sm" className="ms-2 mt-1" onClick={onClick}>{children}</Button>
}