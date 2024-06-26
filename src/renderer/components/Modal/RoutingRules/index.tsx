import classNames from 'classnames';
import useRoutingRulesModal from './useRoutingRulesModal';

interface RoutingRulesModalProps {
    title: string;
    isOpen: boolean;
    onClose: () => void;
    routingRules: string;
    setRoutingRules: (value: string) => void;
}

export default function RoutingRulesModal({
    title,
    isOpen,
    onClose,
    routingRules,
    setRoutingRules
}: RoutingRulesModalProps) {
    const {
        appLang,
        handleCancelButtonClick,
        handleCancelButtonKeyDown,
        handleOnClose,
        handleRoutingRulesInput,
        handleSetRoutingRulesSimple,
        onSaveModal,
        onUpdateKeyDown,
        routingRulesInput,
        showModal
    } = useRoutingRulesModal({
        isOpen,
        onClose,
        routingRules,
        setRoutingRules
    });

    if (!isOpen) return <></>;

    return (
        <div className={classNames('dialog', !showModal ? 'no-opacity' : '')}>
            <div className='dialogBg' onClick={handleOnClose} role='presentation' />
            <div className='dialogBox'>
                <div className='container'>
                    <div className='line'>
                        <div className='miniLine' />
                    </div>
                    <h3>
                        {title}
                        <div className='labels'>
                            <div
                                role='presentation'
                                className={classNames(
                                    'label',
                                    'label-warning',
                                    'pull-right',
                                    routingRulesInput === '' ? '' : 'hidden'
                                )}
                                onClick={handleSetRoutingRulesSimple}
                            >
                                <i className='material-icons'>&#xe145;</i>
                                {appLang?.modal?.routing_rules_sample}
                            </div>
                        </div>
                    </h3>
                    <textarea
                        value={routingRulesInput}
                        spellCheck={false}
                        className='form-control'
                        onChange={handleRoutingRulesInput}
                        tabIndex={0}
                    />
                    <div className='clearfix' />
                    <div
                        role='button'
                        tabIndex={0}
                        aria-hidden='true'
                        className={classNames('btn', 'btn-cancel')}
                        onClick={handleCancelButtonClick}
                        onKeyDown={handleCancelButtonKeyDown}
                    >
                        {appLang?.modal?.cancel}
                    </div>
                    <div
                        role='button'
                        tabIndex={0}
                        className={classNames('btn', 'btn-save')}
                        onClick={onSaveModal}
                        onKeyDown={onUpdateKeyDown}
                    >
                        {appLang?.modal?.update}
                    </div>
                </div>
            </div>
        </div>
    );
}
