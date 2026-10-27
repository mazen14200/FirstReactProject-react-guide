

class ButtonClass extends Component {
    state = {  } 
    render() { 
        return (
            <button onClick={this.handleClick}>
                {this.props.children}
            </button>
        );
    }
}
 
export default ButtonClass;

