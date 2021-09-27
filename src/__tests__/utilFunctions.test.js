import {shortenText} from '../utils/functions';
import { wordCount, attachUsername, attachUserName } from '../../server/utils';
import { shortText, longText, posts, users } from './__data__/testData';

test ('shortenText will not alter a string under 100 characters', () => {
    expect(shortenText(shortText)).toHaveLength(29);
});

test ('shortenText will short text over 100 characters and add three periods', () => {
    const shortened = shortenText(longText);
    expect(shortened).not.toHaveLength(longText.length);
    expect(shortened.slice(-3)).toBe('...');
});

test ('wordCount will check the count of words in a sentence', () => {
    expect(wordCount(posts)).toBe(233);
});

test ('attachUserName should correctly count the number of words in a sentence', () => {
    const newPosts = attachUserName(users, posts);
    expect(newPosts[0]).toHaveProperty('displayName');
});


test ('attachUserName will remove any post with no matching user', () => {
    const newPosts = attachUserName(users, posts);
    const deletedPost = posts[5];
    expect(newPosts).not.toContainEqual(deletedPost);
})