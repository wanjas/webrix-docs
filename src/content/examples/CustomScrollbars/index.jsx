import React, {useContext} from 'react';
import {Scrollable} from 'webrix/components';
import {FaChevronUp, FaChevronDown, FaCaretUp, FaCaretDown} from 'react-icons/fa';
import './style.scss';

const scrollTo = (scrollbar, scrollTop) => {
    scrollbar.current.style.scrollBehavior = 'smooth';
    scrollbar.current.scrollTop = scrollTop;
    scrollbar.current.style.scrollBehavior = '';
};

const scrollToTop = scrollbar => scrollTo(scrollbar, 0);
const scrollToBottom = scrollbar => scrollTo(scrollbar, scrollbar.current.scrollHeight);

const Scrollbar1 = () => {
    const {container} = useContext(Scrollable.Context);
    return (
        <div className='scrollbar1'>
            <FaChevronUp onClick={() => scrollToTop(container)}/>
            <FaChevronDown onClick={() => scrollToBottom(container)}/>
            <Scrollable.VerticalScrollbar.Default container={container}/>
        </div>
    );
};

const Scrollbar2 = () => (
    <div className='scrollbar2'>
        <Scrollable.VerticalScrollbar.Default/>
    </div>
);

const Scrollbar3 = () => (
    <div className='scrollbar3'>
        <Scrollable.VerticalScrollbar.Default/>
    </div>
);

const Scrollbar4 = () => {
    const {container} = useContext(Scrollable.Context);
    return (
        <div className='scrollbar4'>
            <FaCaretUp className='scroll-button direction-up' onClick={() => scrollToTop(container)}/>
            <Scrollable.VerticalScrollbar.Default container={container}/>
            <FaCaretDown className='scroll-button direction-down' onClick={() => scrollToBottom(container)}/>
        </div>
    );
};

const Scrollbars = ({children}) => (
    <Scrollable>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        <Scrollable.VerticalScrollbar>
            {children}
        </Scrollable.VerticalScrollbar>
    </Scrollable>
);

export default () => (
    <div className='scrollbars'>
        <Scrollbars>
            <Scrollbar1/>
        </Scrollbars>
        <Scrollbars>
            <Scrollbar2/>
        </Scrollbars>
        <Scrollbars>
            <Scrollbar3/>
        </Scrollbars>
        <Scrollbars>
            <Scrollbar4/>
        </Scrollbars>
    </div>
);