import React, { PureComponent } from "react";
import { createGlobalStyle } from "styled-components";
import TypoGraphy, { getAllTextStyles } from "@fdmg/fd-typography";
import Card, {CardTypes, CardStyle} from '@fdmg/fd-card';

interface Interest {
    activeButtonText?: string;
    alertSelected?: boolean;
    addInterestLink?: string;
    addAlertLink?: string;
    buttonText?: string;
    deleteInterestLink?: string;
    deleteAlertLink?: string;
    link?: string;
    selected?: boolean;
    tag: string;
    uuid: string;
}

export interface Props {
    cardStyle: CardTypes;
    className?: string;
    onDisableAlertClick: (tag: string) => void;
    onEnableAlertClick: (tag: string) => void;
    onFollowClick: (tag: string) => void;
    onUnfollowClick: (tag: string) => void;
    interests: Interest[];
    title?: string;
    titleLink?: string;
}

export default class ArticleInterests extends PureComponent<Props, any> {

    onFollowClick: React.ReactEventHandler<HTMLButtonElement> = (e) => {
        const currentTarget = e.currentTarget;
        if (currentTarget.getAttribute('data-selected') === 'true') {
            this.props.onUnfollowClick(currentTarget.getAttribute('data-tag') as string);
        } else {
            this.props.onFollowClick(currentTarget.getAttribute('data-tag') as string);
        }
    }

    onEnableAlertClick: React.ReactEventHandler<HTMLElement> = (e) => {
        const currentTarget = e.currentTarget;
        this.props.onEnableAlertClick(currentTarget.getAttribute('data-tag') as string);
    }

    onDisableAlertClick: React.ReactEventHandler<HTMLElement> = (e) => {
        const currentTarget = e.currentTarget;
        this.props.onDisableAlertClick(currentTarget.getAttribute('data-tag') as string);
    }

    render() {
        return(
            <>
                <GlobalStyle/>
                <Card cardStyle={this.props.cardStyle} className={`fd-article-interests${this.props.className ? ` ${this.props.className}` : ''}`}>
                    <TypoGraphy className="fd-article-interests-h" textStyle="card-h">
                        <h3><a href={`${this.props.titleLink ? this.props.titleLink : '/mijn-nieuws'}`}>{this.props.title ? this.props.title : 'Volgen via mijn nieuws'}</a></h3>
                    </TypoGraphy>
                    <ul>
                        {
                            this.props.interests.map((interest: Interest) => (
                                <li key={interest.uuid}>
                                    <div className={`interest-container${interest.selected ? ' selected' : ''}`}>
                                        <a href={`${interest.link ? interest.link : `/tag/${interest.tag}`}`} title={interest.tag}>{interest.tag}</a>
                                        <span className="interest-controls">
                                            <span className={`alert${interest.alertSelected ? ' selected' : ''}`} data-addurl={interest.addAlertLink ? interest.addAlertLink : '/add-alert'} data-deleteurl={interest.addAlertLink ? interest.addAlertLink : '/add-alert'}>
                                                <i className="default-icon icon-bell" data-tag={interest.tag} onClick={this.onEnableAlertClick}/>
                                                <i className="active-icon icon-bell1" data-tag={interest.tag} onClick={this.onDisableAlertClick}/>
                                            </span>
                                            <button onClick={this.onFollowClick} data-tag={interest.tag} data-selected={interest.selected} data-addurl={interest.addInterestLink ? interest.addInterestLink : '/add-interest'} data-deleteurl={interest.deleteInterestLink ? interest.deleteInterestLink : '/delete-interest'}>
                                                <span className="cross"/> <span className="button-text default-text">{interest.buttonText ? interest.buttonText : 'Volg'}</span><span className="button-text active-text">{interest.buttonText ? interest.buttonText : 'Ontvolg'}</span>
                                            </button>
                                        </span>
                                    </div>
                                </li>
                                )
                            )
                        }
                    </ul>
                </Card>
            </>
        );
    }
}

const GlobalStyle = createGlobalStyle`
.fd-article-interests {
    padding: 15px 15px 0 15px;
    h3.fd-article-interests-h {
        min-height: 20px;
        margin-bottom: 15px;
    }
    h3.fd-article-interests-h a {
        color: inherit;
        text-decoration: inherit;
    }
    &.persoonlijk h3.fd-article-interests-h {
        color: #e57e30;
    }

    ul {
        padding: 0;
        margin: 0 -15px;
        list-style: none;
    }

    li {
        display: inline-block;
        width: 100%;
        border-top: 1px solid rgba(0, 0, 0, 0.1);
        > div {
            margin: 10px;
            display: flex;
            position: relative;
            height: 30px;
        }
    }

    .interest-container a {
        flex-grow: 1;
        position: relative;
        top: 5px;
        color: #191919;
        &:hover {
            color: #49a4a2;
        }
        display: block;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        text-decoration: none;
        font-family: 'ProximaNovaRegular', Helvetica, sans-serif;
    }

    .interest-controls {
        display: flex;
        justify-content: flex-end;
        flex: 0 0 140px;

        .alert {
            margin-right: .5rem;
            color: #677381;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            i {
                display: none;
                cursor: pointer;
            }
        }

        .cross {
            &:before {
                content: '+';
                display: block;
                width: 10px;
                height: 10px;
                line-height: 10px;
            }
            display: inline-block;
            transform: rotate(0deg);
            transition: transform .5s;
            transform-origin: center center;
            font-size: 20px;
            position: relative;
            top: 2px;
        }

        .button-text {
            margin-left: 5px;
        }

        .active-text {
            display: none;
        }

        button {
            outline: none;
            border-radius: 2px;
            white-space: nowrap;
            float: right;
            padding: 5px 10px;
            border: 1px solid #49a4a2;
            color: #49a4a2;
            background-color: transparent;
            cursor: pointer;
            transition: color .2s;
            font-family: 'ProximaNovaRegular', sans-serif;
            &:hover {
                background-color: #49a4a2;
                color: #ffeadb;
            }
        }
    }

    .interest-container.selected {
        .interest-controls {
            .cross {
                transform: rotate(45deg);
            }
        }

        button {
            background-color: #49a4a2;
            color: #ffeadb;
        }
        button .default-text {
            display: none;
        }
        .default-icon,
        button .active-text {
            display: inline;
        }
    }

    .alert.selected {
        .default-icon {
            display: none;
        }
        .active-icon {
            display: inline;
        }
    }

    &.persoonlijk {
        h3 {
            color: #e57e30;
        }

        .cross,
        .button-text {
            color: black;
        }

        button:hover {
            .cross,
            .button-text {
                color: white;
            }
        }

        .interest-container a:hover {
            color: #e57e30;
        }

        .interest-container.selected {
            .button-text, .cross {
                color: #ffffff;
            }
        }
    }
}
`;

export const ArticleInterestsStyle = createGlobalStyle`
${(CardStyle as any).globalStyle.rules}
${getAllTextStyles(['card-h']).globalStyle.rules}
${(GlobalStyle as any).globalStyle.rules}
`;
