import TestRenderer from 'react-test-renderer';
import ArticleInterests from '../src/ArticleInterests';
import React from 'react';
import uniqid from 'uniqid';

const onDisableAlertClick = () => {};
const onEnableAlertClick = () => {};
const onFollowClick = () => {};
const onUnfollowClick = () => {};
const interests = [{
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
}];

describe('ArticleInterests', () => {
    test('renders correctly', () => {
        let articleInterests = TestRenderer.create(<ArticleInterests
            cardStyle="article"
            onDisableAlertClick={onDisableAlertClick}
            onEnableAlertClick={onEnableAlertClick}
            onFollowClick={onFollowClick}
            onUnfollowClick={onUnfollowClick}
            title="Volgen via mijn nieuws"
            titleLink="https://fd.nl/mijn-nieuws"
            interests={interests}
        />);
        expect(articleInterests.toJSON()).toMatchSnapshot();

        articleInterests = TestRenderer.create(<ArticleInterests
            cardStyle="persoonlijk"
            onDisableAlertClick={onDisableAlertClick}
            onEnableAlertClick={onEnableAlertClick}
            onFollowClick={onFollowClick}
            onUnfollowClick={onUnfollowClick}
            title="Volgen via mijn nieuws"
            titleLink="https://fd.nl/mijn-nieuws"
            interests={interests}
        />);
        expect(articleInterests.toJSON()).toMatchSnapshot();
    });

});
