import React from 'react';
import Header, { HeaderProps } from './Header';

export default {
    title: "Header",
    component: Header
};
export const Default = (props: HeaderProps) => <Header {...props} />;
