import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import ArticleInterests from '../src/ArticleInterests';
import uniqid from 'uniqid';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    .content-area {
        padding: 1rem 0;
        &.persoonlijk {
            background-color: white;
        }
    }
`;

class App extends PureComponent<any, any> {
    state: any = {
        interests: [{
            tag: 'Detailhandel',
            uuid: uniqid()
        }, {
            selected: true,
            tag: 'Eten & Drinken',
            uuid: uniqid()
        }, {
            alertSelected: true,
            selected: true,
            tag: 'Supermarkt',
            uuid: uniqid()
        }]
    }

    onDisableAlertClick = (tag: string) => {
        this.setState({interests: this.state.interests.map((interest: any) => {
            if (interest.tag === tag) {
                return {...interest, alertSelected: false}
            } else {
                return interest;
            }
        })});
    }

    onEnableAlertClick = (tag: string) => {
        this.setState({interests: this.state.interests.map((interest: any) => {
            if (interest.tag === tag) {
                return {...interest, alertSelected: true}
            } else {
                return interest;
            }
        })});
    }

    onFollowClick = (tag: string) => {
        this.setState({interests: this.state.interests.map((interest: any) => {
            if (interest.tag === tag) {
                return {...interest, selected: true}
            } else {
                return interest;
            }
        })});
    }

    onUnfollowClick = (tag: string) => {
        this.setState({interests: this.state.interests.map((interest: any) => {
            if (interest.tag === tag) {
                return {...interest, selected: false, alertSelected: false}
            } else {
                return interest;
            }
        })});
    }

    render() {
        return(
            <>
                <GlobalStyle/>
                <ArticleInterests
                    cardStyle={this.props.cardStyle}
                    onDisableAlertClick={this.onDisableAlertClick}
                    onEnableAlertClick={this.onEnableAlertClick}
                    onFollowClick={this.onFollowClick}
                    onUnfollowClick={this.onUnfollowClick}
                    title="Volgen via mijn nieuws"
                    titleLink="https://fd.nl/mijn-nieuws"
                    interests={this.state.interests}
                />
            </>
        );
    }
}

ReactDOM.render(<>
    <div>
        <App cardStyle="article"/>
    </div>
</>,
document.querySelector('.article aside'));

ReactDOM.render(<>
    <div>
        <App cardStyle="persoonlijk"/>
    </div>
</>,
document.querySelector('.persoonlijk aside'));

