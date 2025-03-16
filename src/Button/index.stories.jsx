import Index from './index';

const meta = {
    component: Index,
};

export default meta;

export const Default = {
    args: {
        className: '',
        type: 'primary',
        size: 'medium',
        disabled: false,
    },
};

export const DisabledButton = {
    args: {
        className: '',
        type: 'primary',
        size: 'medium',
        disabled: true,
    },
};
