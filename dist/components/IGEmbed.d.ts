/// <reference types="react" />
import { DivProps } from 'react-html-props';
export interface IGEmbedProps extends DivProps {
    url: string;
    backgroundUrl?: string;
    igVersion?: string;
    linkText?: string;
    processDelay?: number;
    scriptLoadDisabled?: boolean;
    linkTextDisabled?: boolean;
    backgroundBlurDisabled?: boolean;
    backgroundBlurAnimationDisabled?: boolean;
    backgroundBlurAnimationDuration?: number;
    spinnerDisabled?: boolean;
    softFilterDisabled?: boolean;
    retryDisabled?: boolean;
    retryInitialDelay?: number;
    retryBackoffMaxDelay?: number;
}
export declare const IGEmbed: ({ url, backgroundUrl, igVersion, linkText, processDelay, scriptLoadDisabled, linkTextDisabled, backgroundBlurDisabled, backgroundBlurAnimationDisabled, backgroundBlurAnimationDuration, spinnerDisabled, softFilterDisabled, retryDisabled, retryInitialDelay, retryBackoffMaxDelay, ...divProps }: IGEmbedProps) => JSX.Element;
