import type { Meta, StoryObj } from '@storybook/nextjs-vite';

// Button variants
type ButtonVariant = 'primary' | 'secondary' | 'gold';

interface ButtonProps {
    children: React.ReactNode;
    variant: ButtonVariant;
    icon?: string;
    disabled?: boolean;
}

function Button({ children, variant = 'primary', icon, disabled = false }: ButtonProps) {
    const baseStyles = "inline-flex items-center justify-center px-8 py-3.5 font-medium rounded-lg transition-all duration-300 cursor-pointer";

    const variants = {
        primary: {
            background: 'linear-gradient(135deg, #6B5B7A, #3D2E4A)',
            color: '#FDFBF7',
            border: 'none',
        },
        secondary: {
            background: 'transparent',
            color: '#6B5B7A',
            border: '2px solid #6B5B7A',
        },
        gold: {
            background: 'linear-gradient(135deg, #C9A962, #A68942)',
            color: '#3D2E4A',
            border: 'none',
        },
    };

    return (
        <button
            className={baseStyles}
            style={variants[variant]}
            disabled={disabled}
        >
            {icon && <span className="mr-2">{icon}</span>}
            {children}
        </button>
    );
}

const meta: Meta<typeof Button> = {
    title: 'LunarLoom/Button',
    component: Button,
    parameters: {
        layout: 'centered',
        backgrounds: {
            default: 'cream',
            values: [
                { name: 'cream', value: '#FDFBF7' },
                { name: 'dark', value: '#3D2E4A' },
            ],
        },
    },
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['primary', 'secondary', 'gold'],
        },
        icon: { control: 'text' },
        disabled: { control: 'boolean' },
    },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {
        children: 'Tarot entdecken',
        variant: 'primary',
        icon: '🔮',
    },
};

export const Secondary: Story = {
    args: {
        children: 'Mehr erfahren',
        variant: 'secondary',
    },
};

export const Gold: Story = {
    args: {
        children: 'Reading buchen',
        variant: 'gold',
        icon: '✦',
    },
};

export const AllVariants: Story = {
    render: () => (
        <div className="flex gap-4 flex-wrap">
            <Button variant="primary" icon="🔮">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="gold" icon="✦">Gold</Button>
        </div>
    ),
};
