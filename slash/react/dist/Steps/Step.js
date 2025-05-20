import { jsx as _jsx } from "react/jsx-runtime";
import { StepCurrent } from "./StepCurrent";
import { StepDisabled } from "./StepDisabled";
import { StepLink } from "./StepLink";
const Step = ({ number, id, title, classModifier, href, onClick, mode = "link", className, }) => {
    switch (mode) {
        case "link":
            return (_jsx(StepLink, { id: id, href: href ?? "#", number: number, classModifier: classModifier, className: className, title: title, onClick: onClick }));
        case "active":
            return (_jsx(StepCurrent, { id: id, title: title, classModifier: classModifier, className: className, number: number }));
        default:
            return (_jsx(StepDisabled, { id: id, title: title, classModifier: classModifier, className: className, number: number }));
    }
};
export { Step };
