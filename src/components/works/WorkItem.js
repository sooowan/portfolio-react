import classNames from 'classnames';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import BackgroundLottie from '../img/BackgroundLottie';
const WorkItemBlock = styled.li`
  width: 380px;
  height: 420px;
  @media (max-width: 1114px) {
    width: 100%;
    max-width: 380px;
  }
  @media (max-width: 768px) {
    max-height: 390px;
  }
  a {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  .work-header {
    position: relative;
    height: 28%;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    background: var(--df-hover);
    overflow: hidden;
    &.gradient {
      background: linear-gradient(
        100deg,
        rgba(214, 180, 237, 1) 0%,
        rgba(46, 111, 181, 1) 35%,
        rgba(253, 29, 29, 1) 120%
      );
    }
    &.solid_indigo {
      background: var(--oc-indigo-5);
    }
    &.lottie {
      background: var(--oc-pink-5);
    }
  }
  .work-content {
    position: relative;
    flex: auto;
    background: var(--df-bg);
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    padding: 48px 24px 24px 24px;
    font-size: 1.2rem;
    line-height: 1.4rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .title {
      font-size: 1.2rem;
      line-height: 1.8rem;
      word-break: break-all;
      padding-bottom: 12px;
    }
    .title-ico {
      position: absolute;
      left: 24px;
      top: -2rem;
      width: calc(100% - 48px);
      font-size: 4rem;
      display: inline-flex;
      align-items: center;
      width: 4rem;
      height: 4rem;
    }
    .tag-list {
      margin-top: 12px;
      display: flex;
      gap: 6px;
      font-size: 0.9rem;
      line-height: 1.2rem;
      flex-wrap: wrap;
      opacity: 0.7;
    }
    p {
      &.desc {
        font-size: 1rem;
        line-height: 1.2rem;
      }
      &.detail {
        opacity: 0.8;
        padding: 10px;
        background: var(--df-hover);
        border-radius: 8px;
        margin-top: 12px;
        font-size: 0.9rem;
        line-height: 1.2rem;
      }
    }
  }
`;
export default function WorkItem({ work }) {
  const { link, title, desc, tags, style, detail } = work;
  return (
    <WorkItemBlock>
      <Link to={link} target="_blank">
        <div className={classNames('work-header', style ? style : '')}>
          {style === 'lottie' && <BackgroundLottie />}
        </div>
        <div className="work-content">
          <div>
            <h4 className="title">
              <span className="title-ico">{title.ico}</span>
              {title.text}
            </h4>
            <p className="desc" dangerouslySetInnerHTML={{ __html: desc }} />
            <div className="tag-list">
              {tags.map((tag) => (
                <span key={tag}>#{tag}</span>
              ))}
            </div>
          </div>
          {detail && (
            <p
              className="detail"
              dangerouslySetInnerHTML={{ __html: detail }}
            />
          )}
        </div>
      </Link>
    </WorkItemBlock>
  );
}
