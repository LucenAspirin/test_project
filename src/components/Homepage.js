import { Component } from "react";
import { getPetApi } from './getPetApi';


class Homepage extends Component {
   
    state = {
        articles: []
    }
    async componentDidMount() {
        const data = await getPetApi()
        this.setState((prevState) => ({
            articles: data,
        }));
    }
    render() {
        const { articles } = this.state;
        
        return (
            <div>
                {console.log(articles)}
            </div>
        );
    }
}
