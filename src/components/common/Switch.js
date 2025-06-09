import '../../styles/component.scss';
export default function Switch({ title, defaultChecked, hanleClickTheme }) {
  return (
    <div className="switch-wrap">
      <span className="switch-name">{title}</span>
      <div className="switch-btn">
        <input
          type="checkbox"
          id="switch_theme"
          defaultChecked={defaultChecked}
          onChange={hanleClickTheme}
        />
        <label htmlFor="switch_theme" className="switch-label"></label>
      </div>
    </div>
  );
}
