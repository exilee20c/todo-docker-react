import React, { Component } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  far,
  faTrashAlt,
  faStickyNote,
  faPlusSquare,
  faSquare,
  faCheckSquare
} from "@fortawesome/free-regular-svg-icons";

import "./index.css";
library.add(
  far,
  faStickyNote,
  faPlusSquare,
  faSquare,
  faCheckSquare,
  faTrashAlt
);

const load = () => {
  if (
    window.localStorage &&
    typeof window.localStorage.getItem === "function"
  ) {
    try {
      return JSON.parse(window.localStorage.getItem(this.props.storage || "_exl_todo"));
    } catch (e) {
      return undefined;
    }
  }
  return undefined;
};

export class MemoDocker extends Component {
  state = load() || { open: true, memo: "", memoes: [], m_l: 0 };

  memoRef = React.createRef();

  openByClick = () =>
    this.setState(
      ({ open }) => ({ open: !open }),
      () => {
        if (this.state.open) this.memoRef.current.focus();
      }
    );

  memoIt = ({ target }) => this.setState({ memo: target.value });
  addMemo = () =>
    this.state.memo &&
    this.setState(
      ({ memoes }) => ({
        m_l: memoes.unshift({
          g: new Date().toISOString(),
          v: this.state.memo,
          d: false
        }),
        memo: ""
      }),
      this.save
    );

  doneMemo = (g, d) => {
    this.setState(
      ({ memoes }) => ({
        m_l: (memoes[memoes.findIndex(m => m.g === g)].d = d)
      }),
      this.save
    );
  };

  cleanMemo = () => {
    this.setState(
      ({ memoes }) => ({
        memoes: memoes.filter(m => !m.d)
      }),
      this.save
    );
  };

  keyBind = (e, key, cb) => {
    if (e.key === key && typeof cb === "function") cb();
  };

  componentDidMount() {
    window.addEventListener("beforeunload", this.save);
  }

  componentWillUnmount() {
    window.removeEventListener("beforeunload", this.save);
  }

  save = () => {
    if (
      window.localStorage &&
      typeof window.localStorage.setItem === "function"
    ) {
      window.localStorage.setItem(this.props.storage || "_exl_todo", JSON.stringify(this.state));
    }
  };

  render() {
    const { title: t } = this.props;
    const { open, memo, memoes } = this.state;

    return (
      <div className="exl-todo-docker-wrap">
        <button className="pick" onClick={this.openByClick}>
          <FontAwesomeIcon icon={["far", "sticky-note"]} />
          <span>{t || "TODO DOCKER"}</span>
        </button>

        <div className={`pane${open ? " open" : ""}`}>
          <button onClick={this.addMemo}>
            <FontAwesomeIcon icon={["far", "plus-square"]} />
          </button>
          <input
            ref={this.memoRef}
            type="text"
            onChange={this.memoIt}
            onKeyPress={e => this.keyBind(e, "Enter", this.addMemo)}
            value={memo}
          />

          <ul className="memoes">
            {memoes.map(({ g, v, d }) => (
              <li key={g}>
                <button onClick={() => this.doneMemo(g, !d)}>
                  <FontAwesomeIcon
                    icon={["far", d ? "check-square" : "square"]}
                  />
                  <span>{v}</span>
                </button>
              </li>
            ))}
          </ul>
          <button className="clean" onClick={this.cleanMemo}>
            <FontAwesomeIcon icon={["far", "trash-alt"]} />
            <span>CLEAN DONE</span>
          </button>
        </div>
      </div>
    );
  }
}

export default MemoDocker;
