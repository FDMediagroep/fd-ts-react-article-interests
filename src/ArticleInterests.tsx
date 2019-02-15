import React, { PureComponent } from "react";
import { createGlobalStyle } from "styled-components";
import TypoGraphy, { getAllTextStyles } from "@fdmg/fd-typography";
import Card, {CardTypes, CardStyle} from '@fdmg/fd-card';
import {FollowButton, FollowButtonStyle} from '@fdmg/fd-buttons';

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
                                            <FollowButton
                                                buttonStyle={this.props.cardStyle === 'persoonlijk' ? this.props.cardStyle : 'default'}
                                                onClick={this.onFollowClick}
                                                tag={interest.tag}
                                                selected={interest.selected}
                                                followLink={interest.addInterestLink}
                                                unFollowLink={interest.deleteInterestLink}
                                                followButtonText={interest.buttonText}
                                                unFollowButtonText={interest.activeButtonText}
                                            />
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
    }

    .interest-container.selected {
        .default-icon {
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

        .interest-container a:hover {
            color: #e57e30;
        }
    }
}
`;

export const ArticleInterestsStyle = createGlobalStyle`
${(CardStyle as any).globalStyle.rules}
${getAllTextStyles(['card-h']).globalStyle.rules}
${(FollowButtonStyle as any).globalStyle.rules}
${(GlobalStyle as any).globalStyle.rules}
`;
