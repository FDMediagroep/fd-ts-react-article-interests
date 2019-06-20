import React from "react";
import { createGlobalStyle, css } from "styled-components";
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

export default function ArticleInterests(props: Props) {

    const onFollowClick: React.ReactEventHandler<HTMLButtonElement> = (e) => {
        const currentTarget = e.currentTarget;
        if (currentTarget.getAttribute('data-selected') === 'true') {
            props.onUnfollowClick(currentTarget.getAttribute('data-tag') as string);
        } else {
            props.onFollowClick(currentTarget.getAttribute('data-tag') as string);
        }
    };

    const onEnableAlertClick: React.ReactEventHandler<HTMLElement> = (e) => {
        const currentTarget = e.currentTarget;
        props.onEnableAlertClick(currentTarget.getAttribute('data-tag') as string);
    };

    const onDisableAlertClick: React.ReactEventHandler<HTMLElement> = (e) => {
        const currentTarget = e.currentTarget;
        props.onDisableAlertClick(currentTarget.getAttribute('data-tag') as string);
    };

    return(
        <>
            <GlobalStyle/>
            <Card cardStyle={props.cardStyle} className={`fd-article-interests${props.className ? ` ${props.className}` : ''}`}>
                <TypoGraphy className="fd-article-interests-h" textStyle="card-h">
                    <h3><a href={`${props.titleLink ? props.titleLink : '/mijn-nieuws'}`}>{props.title ? props.title : 'Volgen via mijn nieuws'}</a></h3>
                </TypoGraphy>
                <ul>
                    {
                        props.interests.map((interest: Interest) => (
                            <li key={interest.uuid}>
                                <div className={`interest-container${interest.selected ? ' selected' : ''}`}>
                                    <a href={`${interest.link ? interest.link : `/tag/${interest.tag}`}`} title={interest.tag}>{interest.tag}</a>
                                    <span className="interest-controls">
                                        <span className={`alert${interest.alertSelected ? ' selected' : ''}`} data-addurl={interest.addAlertLink ? interest.addAlertLink : '/add-alert'} data-deleteurl={interest.addAlertLink ? interest.addAlertLink : '/add-alert'}>
                                            <i className="default-icon icon-bell" data-tag={interest.tag} onClick={onEnableAlertClick}/>
                                            <i className="active-icon icon-bell1" data-tag={interest.tag} onClick={onDisableAlertClick}/>
                                        </span>
                                        <FollowButton
                                            buttonStyle={props.cardStyle === 'persoonlijk' ? props.cardStyle : 'default'}
                                            onClick={onFollowClick}
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

const styles = css`
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
}
`;

export const ArticleInterestsStyle = css`
${CardStyle}
${getAllTextStyles(['card-h'])}
${FollowButtonStyle}
${styles}
`;

const GlobalStyle = createGlobalStyle`${ArticleInterestsStyle}`;
