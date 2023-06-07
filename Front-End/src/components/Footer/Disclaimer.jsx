import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const Disclaimer = () => {
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState("");

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      {" "}
      <Button
        disableRipple
        style={{ textDecoration: "none", color: "white" }}
        onClick={handleClickOpen("paper")}
      >
        Disclaimer
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">Disclaimer</DialogTitle>
        <DialogContent dividers={scroll === "paper"}>
          <DialogContentText id="scroll-dialog-description">
            <p>
              The information provided on the Royal Real Estate website is for
              general informational purposes only. While we strive to provide
              accurate and up-to-date information, we make no representations or
              warranties of any kind, express or implied, about the
              completeness, accuracy, reliability, suitability or availability
              with respect to the website or the information, products,
              services, or related graphics contained on the website for any
              purpose. Any reliance you place on such information is therefore
              strictly at your own risk.
            </p>{" "}
            <p>
              In no event will we be liable for any loss or damage including
              without limitation, indirect or consequential loss or damage, or
              any loss or damage whatsoever arising from loss of data or profits
              arising out of, or in connection with, the use of this website.
            </p>{" "}
            <p>
              {" "}
              Through this website, you are able to link to other websites which
              are not under the control of Royal Real Estate. We have no control
              over the nature, content, and availability of those sites. The
              inclusion of any links does not necessarily imply a recommendation
              or endorse the views expressed within them.
            </p>{" "}
            <p>
              {" "}
              Every effort is made to keep the website up and running smoothly.
              However, Royal Real Estate takes no responsibility for, and will
              not be liable for, the website being temporarily unavailable due
              to technical issues beyond our control.
            </p>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button style={{ color: "black" }} onClick={handleClose}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Disclaimer;
