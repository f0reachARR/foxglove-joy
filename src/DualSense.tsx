import { useGamepad } from "./useGamepad";
import styles from "./DualSense.module.css";

const DualSense = () => {
  const { gamepad } = useGamepad();

  const buttons = gamepad?.buttons ?? new Array(18).fill({ pressed: false });
  const axes = gamepad?.axes ?? new Array(4).fill(0);

  return (
    <div className={styles.controller}>
      <div className={styles.body}></div>

      {/* body base =============================================== */}
      <div className={styles.parts_topleft}></div>

      <div
        className={`${styles.parts_topcenter} ${
          buttons[17]?.pressed ? styles.button_pressed_base : null
        }`}
      ></div>

      <div className={styles.parts_topright}></div>
      <div className={styles.parts_center}></div>

      {/* top left/right buttons  ================================= */}
      <div
        className={`${styles.button_topleft_left} ${
          buttons[6].pressed ? styles.button_pressed_sub : null
        }`}
      ></div>
      <div
        className={`${styles.button_topleft_right} ${
          buttons[4].pressed ? styles.button_pressed_sub : null
        }`}
      ></div>
      <div
        className={`${styles.button_topright_left} ${
          buttons[5].pressed ? styles.button_pressed_sub : null
        }`}
      ></div>
      <div
        className={`${styles.button_topright_right} ${
          buttons[7].pressed ? styles.button_pressed_sub : null
        }`}
      ></div>

      {/* left buttons ============================================= */}
      <div
        className={`${styles.button_lefttop} ${
          buttons[12].pressed ? styles.button_pressed_main : null
        }`}
      ></div>
      <div
        className={`${styles.button_leftleft} ${
          buttons[14].pressed ? styles.button_pressed_main : null
        }`}
      ></div>
      <div
        className={`${styles.button_leftright} ${
          buttons[15].pressed ? styles.button_pressed_main : null
        }`}
      ></div>
      <div
        className={`${styles.button_leftbottom} ${
          buttons[13].pressed ? styles.button_pressed_main : null
        }`}
      ></div>

      {/* right buttons ============================================= */}
      <div
        className={`${styles.button_righttop} ${
          buttons[3].pressed ? styles.button_pressed_main : null
        }`}
      ></div>
      <div
        className={`${styles.button_rightleft} ${
          buttons[2].pressed ? styles.button_pressed_main : null
        }`}
      ></div>
      <div
        className={`${styles.button_rightright} ${
          buttons[1].pressed ? styles.button_pressed_main : null
        }`}
      ></div>
      <div
        className={`${styles.button_rightbottom} ${
          buttons[0].pressed ? styles.button_pressed_main : null
        }`}
      ></div>

      {/* center buttons ============================================ */}
      <div
        className={`${styles.button_left_small} ${
          buttons[8].pressed ? styles.button_pressed_main : null
        }`}
      ></div>
      <div
        className={`${styles.button_right_small} ${
          buttons[9].pressed ? styles.button_pressed_main : null
        }`}
      ></div>
      <div
        className={`${styles.button_center_small} ${
          buttons[16].pressed ? styles.button_pressed_sub : null
        }`}
      ></div>

      {/* stick buttons ============================================ */}
      <div className={styles.circle_left}>
        <div
          className={`${styles.stick} ${buttons[10].pressed ? styles.button_pressed_sub : null}`}
          style={{
            transform: `translate(
              ${axes[0] * 10}px, ${axes[1] * 10}px)`,
          }}
        ></div>
      </div>
      <div className={styles.circle_right}>
        <div
          className={`${styles.stick} ${buttons[11].pressed ? styles.button_pressed_sub : null}`}
          style={{
            transform: `translate(
              ${axes[2] * 10}px, ${axes[3] * 10}px)`,
          }}
        ></div>
      </div>

      {/* stick position ============================================= */}
      <div className={styles.stick_position}>
        <div className={styles.field_name_left}>Left Stick</div>
        <div className={styles.field_name_right}>Right Stick</div>
        <div className={styles.field_name_x}>X</div>
        <div className={styles.field_name_y}>Y</div>
        <div className={styles.field_value_leftx}>{axes[0].toFixed(4)}</div>
        <div className={styles.field_value_lefty}>{axes[1].toFixed(4)}</div>
        <div className={styles.field_value_rightx}>{axes[2].toFixed(4)}</div>
        <div className={styles.field_value_righty}>{axes[3].toFixed(4)}</div>
      </div>

      {/* left buttons status ======================================= */}
      <div className={`${styles.left_status} ${styles.status_panel}`}>
        <div className={styles.status_name_left}>Buttons</div>
        <div className={styles.status_name_right}>Status</div>
        <div className={styles.status_button_left}>{4}</div>
        <div className={styles.status_button_right}>{`${buttons[4].pressed ? "🟢" : "⚪️"}`}</div>
        <div className={styles.status_button_left}>{6}</div>
        <div className={styles.status_button_right}>{`${buttons[6].pressed ? "🟢" : "⚪️"}`}</div>
        <div className={styles.status_button_left}>{8}</div>
        <div className={styles.status_button_right}>{`${buttons[8].pressed ? "🟢" : "⚪️"}`}</div>
        <div className={styles.status_button_left}>{12}</div>
        <div className={styles.status_button_right}>{`${buttons[12].pressed ? "🟢" : "⚪️"}`}</div>
        <div className={styles.status_button_left}>{14}</div>
        <div className={styles.status_button_right}>{`${buttons[14].pressed ? "🟢" : "⚪️"}`}</div>
        <div className={styles.status_button_left}>{15}</div>
        <div className={styles.status_button_right}>{`${buttons[15].pressed ? "🟢" : "⚪️"}`}</div>
        <div className={styles.status_button_left}>{13}</div>
        <div className={styles.status_button_right}>{`${buttons[13].pressed ? "🟢" : "⚪️"}`}</div>
        <div className={styles.status_button_left}>{10}</div>
        <div className={styles.status_button_right}>{`${buttons[10].pressed ? "🟢" : "⚪️"}`}</div>
        <div className={styles.status_button_left}>{16}</div>
        <div className={styles.status_button_right}>{`${buttons[16].pressed ? "🟢" : "⚪️"}`}</div>
      </div>

      {/* right buttons status ======================================= */}
      <div className={`${styles.right_status} ${styles.status_panel}`}>
        <div className={styles.status_name_left}>Buttons</div>
        <div className={styles.status_name_right}>Status</div>
        <div className={styles.status_button_left}>{5}</div>
        <div className={styles.status_button_right}>{`${buttons[5].pressed ? "🟢" : "⚪️"}`}</div>
        <div className={styles.status_button_left}>{7}</div>
        <div className={styles.status_button_right}>{`${buttons[7].pressed ? "🟢" : "⚪️"}`}</div>
        <div className={styles.status_button_left}>{9}</div>
        <div className={styles.status_button_right}>{`${buttons[9].pressed ? "🟢" : "⚪️"}`}</div>
        <div className={styles.status_button_left}>{3}</div>
        <div className={styles.status_button_right}>{`${buttons[3].pressed ? "🟢" : "⚪️"}`}</div>
        <div className={styles.status_button_left}>{2}</div>
        <div className={styles.status_button_right}>{`${buttons[2].pressed ? "🟢" : "⚪️"}`}</div>
        <div className={styles.status_button_left}>{1}</div>
        <div className={styles.status_button_right}>{`${buttons[1].pressed ? "🟢" : "⚪️"}`}</div>
        <div className={styles.status_button_left}>{0}</div>
        <div className={styles.status_button_right}>{`${buttons[0].pressed ? "🟢" : "⚪️"}`}</div>
        <div className={styles.status_button_left}>{11}</div>
        <div className={styles.status_button_right}>{`${buttons[11].pressed ? "🟢" : "⚪️"}`}</div>
        <div className={styles.status_button_left}>{17}</div>
        {buttons[17] ? (
          <div className={styles.status_button_right}>{`${buttons[17].pressed ? "🟢" : "⚪️"}`}</div>
        ) : null}
      </div>
    </div>
  );
};

export default DualSense;
