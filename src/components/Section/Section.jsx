import PropTypes from 'prop-types';
import css from './Section.module.css';

export const Section = ({ children, title }) => {
    return (
        <section className=
            {title ? css.baseSectionAccent : css.baseSection}
        >
            { title&&<h2>{title}</h2>}
            {children}
        </section>
    )
}

Section.propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string,
}