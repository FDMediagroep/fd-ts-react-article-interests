import { CardTypes } from '@fdmg/fd-card';
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
export default function ArticleInterests(props: Props): JSX.Element;
export declare const ArticleInterestsStyle: import("styled-components").FlattenSimpleInterpolation;
export {};
