import { lightTheme, darkTheme } from './../theme';
import { useDarkMode } from './../useDarkMode';
import './lightDarkToggle.css';

function LightDarkToggle(props) {
    const [theme, toggleTheme] = useDarkMode();
    const themeMode = theme === 'light' ? lightTheme : darkTheme;

    return (
        <div>
            <span class="tag is-dark" id="dark-light-mode">Light/Dark Mode</span>
            <label class="switch"  >
                <input type="checkbox" id="toggle-switch" onChange={props.onChange}/>
                <span class="slider round"></span>
            </label>
        </div>
    );
}

export default LightDarkToggle;