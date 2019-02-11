import React, { PureComponent } from "react";
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
    onFollowClick: React.ReactEventHandler<HTMLButtonElement>;
    onEnableAlertClick: React.ReactEventHandler<HTMLElement>;
    onDisableAlertClick: React.ReactEventHandler<HTMLElement>;
    render(): JSX.Element;
}
export declare const ArticleInterestsStyle: import("styled-components").GlobalStyleComponent<{}, import("styled-components").DefaultTheme>;
export {};
