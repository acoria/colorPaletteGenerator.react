import { useContext, useState } from "react";
import { ReactComponent as HelpIcon } from "../../assets/help.svg";
import { AppContext } from "../../context/AppContext";
import styles from "./Help.module.scss";
import { IHelpProps } from "./IHelpProps";
import { style } from "../../utils/style";

export const Help: React.FC<IHelpProps> = (props) => {
  const helpPrimaryColors = ["#DB8529", "#E4A562", "#F2D5B5"];
  const helpNeutralColors = [
    "#133D67",
    "#285480",
    "#1d5a9a",
    "#3d76b8",
    "#4588d3",
    "#6ea2dd",
    "#DFEBF7",
  ];
  const helpAccentColor = "#146733";
  const context = useContext(AppContext);
  const [memoPrimaryColors, setMemoPrimaryColors] = useState<string[]>(
    context.primaryColors.value
  );
  const [memoAccentColor, setMemoAccentColor] = useState<string>(
    context.accentColor.value
  );
  const [memoNeutralColors, setMemoNeutralColors] = useState<string[]>(
    context.neutralColors.value
  );

  const [showingHelp, setShowingHelp] = useState<boolean>(false);

  return (
    <div className={style(styles.help, props.className)}>
      <HelpIcon
        className={styles.helpIcon}
        onClick={() => {
          if (showingHelp) {
            //restore user's colors
            context.primaryColors.setValue(memoPrimaryColors);
            context.accentColor.setValue(memoAccentColor);
            context.neutralColors.setValue(memoNeutralColors);
            setShowingHelp(false);
          } else {
            //save current user's colors
            setMemoPrimaryColors(context.primaryColors.value);
            setMemoAccentColor(context.accentColor.value);
            setMemoNeutralColors(context.neutralColors.value);

            //set help colors
            context.primaryColors.setValue(helpPrimaryColors);
            context.accentColor.setValue(helpAccentColor);
            context.neutralColors.setValue(helpNeutralColors);
            setShowingHelp(true);
          }
        }}
      />
    </div>
  );
};
